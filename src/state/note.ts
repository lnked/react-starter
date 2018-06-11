/**
 * Model for the Note
 */
export default interface Note {
    noteId: string,
    title: string,
    content: string,
    createdAt: number,
    updatedAt: number
}


import { observable } from 'mobx'

class NoteStore {
    @observable notes: Note[] = [];

    saveNote(note: Note) {
        const idx = this.notes.findIndex((n) => note.noteId === n.noteId);
        if (idx < 0) {
            this.notes.push(note);
        } else {
            this.notes[idx] = note;
        }
    }

    deleteNote(note: Note) {
        const idx = this.notes.findIndex((n) => n.noteId === note.noteId);
        if (idx < 0) {
            throw new Error(`Note ${note.noteId} not found`);
        } else {
            this.notes.splice(idx, 1);
        }
    }

    getNote(noteId: string): Note {
        const idx = this.notes.findIndex((n) => n.noteId === noteId);
        if (idx < 0) {
            throw new Error(`Note ${noteId} not found`);
        } else {
            return this.notes[idx];
        }
    }
}

const observableNoteStore = new NoteStore();

const newNote = (title: string, content: string) => {
    const note = {
        noteId: uuid.v4(),
        title: title,
        content: content,
        updatedAt: Date.now(),
        createdAt: Date.now()
    };
    observableNoteStore.saveNote(note);
}

newNote('First Note', 'some content');
newNote('2nd Note', 'some content');
newNote('3rd Note', 'some content');
newNote('4th Note', 'some content');

export default observableNoteStore;

//
import React from 'react';
import { Platform, StyleSheet, View, ViewStyle } from 'react-native';
import { observer, inject } from 'mobx-react/native';
import { NoteStore } from '../stores/noteStore';
import Note from '../models/Note';
import NoteList from './NoteList';

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0
    } as ViewStyle
});

interface NoteListPageProperties {
    /**
     * The store reference for the notes store.  Note that this needs to be optional
     * because the <Provider> component adjusts things appropriately, which the
     * code checker won't pick up on.
     *
     * @type {NoteStore}
     * @memberof NoteListPageProperties
     */
    noteStore?: NoteStore
}

@inject('noteStore')
@observer
export default class NoteListPage extends React.Component<NoteListPageProperties> {
    onDeleteItem(item: Note): void {
        this.props.noteStore.deleteNote(item);
    }

    render() {
        return (
            <View style={styles.container}>
                <NoteList
                    items={this.props.noteStore.notes}
                    onDeleteItem={(item: Note) => this.onDeleteItem(item)}
                />
            </View>
        );
    }
}
