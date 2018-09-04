import { observable, computed } from 'mobx'

export interface Student {
    id: number;
    name: string;
}

export interface Course {
    id: number;
    name: string;
}

const store = observable({
    students: observable.map(),
    courses: observable.map(),
    enrollment: observable.map(),

    addStudent (student: Student) {
        if (this.students.has(student.id)) {
            throw new Error('student already exists')
        } else {
            this.students.set(student.id, student)
        }
    },

    updateStudent (student: Student) {
        this.students.set(student.id, student)
    },

    removeStudent (id: any) {
        this.students.delete(id)
    },

    addCourse (course: Course) {
        if (this.courses.has(course.id)) {
            throw new Error('course already exists')
        } else {
            this.courses.set(course.id, course)
        }
    },

    updateCourse (course: Course) {
        this.courses.set(course.id, course)
    },

    removeCourse (id: number) {
        this.courses.delete(id)
    },

    enrollStudent (courseId: number, studentId: number) {
        if (!this.enrollment.get(courseId)) {
            this.enrollment.set(courseId, observable.array([]))
            this.enrollment.get(courseId).push(studentId)
        } else if (!this.enrollment.get(courseId).includes(studentId)) {
            this.enrollment.get(courseId).push(studentId)
        }
    },

    unenrollStudent(courseId: number, studentId: number) {
        this.enrollment.get(courseId).remove(studentId)
    },

    enrolledStudents(courseId: number) {
        return computed(() => this.enrollment.get(courseId).map((n: any) => this.students.get(n))).get()
    },
})

export default store

// import React from 'react'
// import { observer } from 'mobx-react'
// import store from './store'

// let student1 = {
//     id: 'student1',
//     name: 'Ben'
// }
// let student2 = {
//     id: 'student2',
//     name: 'Nikki'
// }
// let course1 = {
//     id: 'course1',
//     name: 'Math 101'
// }

// store.addStudent(student1)
// store.addStudent(student2)
// store.addCourse(course1)
// store.enrollStudent(course1.id, student1.id)

// const StudentsList = () => {
//     return (
//         <div>
//             <h2>{course1.name}</h2>
//             <ul>
//                 {store.enrolledStudents(course1.id).map(
//                     n => <li key={n.id}>{n.name}</li>
//                 )}
//             </ul>
//             <button
//                 onClick={() => store.enrollStudent(course1.id, student2.id)}
//             >Enroll Student 2</button>
//         </div>
//     )
// }

// export default observer(StudentsList)
