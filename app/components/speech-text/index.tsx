import * as React from 'react'
import * as css from './styles.scss'

interface T {
    grammar?: any;
    children?: any;
    handleSpeech?: (() => void);
}

interface S {
    speaks?: any;
    started?: boolean;
}

/* eslint-disable */
interface WindowInterface extends Window {
    SpeechRecognition (): void;
    msSpeechRecognition (): void;
    mozSpeechRecognition (): void;
    webkitSpeechRecognition (): void;
    SpeechGrammarList (): void;
    msSpeechGrammarList (): void;
    mozSpeechGrammarList (): void;
    webkitSpeechGrammarList (): void;
}

declare var window: WindowInterface
/* eslint-enable */

export default class SpeechText extends React.Component<T, S> {
    static defaultProps = {
        grammar: [],
        handleSpeech: () => {
            console.log('')
        }
    }

    state = {
        speaks: [],
        started: false
    }

    recognition: any = null

    componentDidMount () {
        try {
            this.recognition = new (
                window.SpeechRecognition ||
                window.webkitSpeechRecognition ||
                window.mozSpeechRecognition ||
                window.msSpeechRecognition
            )()

            this.initSpeech()
        } catch (e) {}
    }

    handleSpeech = () => {
        console.log('e')
        // this.props.handleSpeech()
    }

    handleToggle = () => {
        const { started } = this.state

        if (started) {
            this.recognition.stop()
        } else {
            this.recognition.start()
        }
    }

    handleStop = () => {
        this.recognition.stop()
    }

    initSpeech = () => {
        const { grammar } = this.props

        this.recognition.continuous = true
        this.recognition.interimResults = false
        this.recognition.maxAlternatives = 1

        this.recognition.lang = ['ru-RU', 'en-US', 'en-GB']

        if (grammar) {
            console.log('grammar: ', grammar)

            // grammar = '#JSGF V1.0 grammar colors public <color> = aqua | violet | white | yellow'

            const speechRecognitionList = new (
                window.SpeechRecognition ||
                window.webkitSpeechRecognition ||
                window.mozSpeechRecognition ||
                window.msSpeechRecognition
            )()

            speechRecognitionList.addFromString(grammar, 1)

            this.recognition.grammars = speechRecognitionList
        }

        this.recognition.onresult = (event) => {
            const { speaks } = this.state
            const count = event.results.length

            const matter: any = []

            if (count > 0) {
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    matter.push(event.results[i][0].transcript)
                }
            }

            console.log(event.results)
            console.log('txtRec: ', matter)
            console.log('You said: ', event.results[0][0].transcript)

            this.setState({ ...this.state, speaks: speaks.concat(matter) })
        }

        this.recognition.onstart = () => {
            this.setState({ ...this.state, started: true })
        }

        this.recognition.onerror = (event) => {
            console.log(`on error ${event.error}`)

            if (event.error === 'no-speech') {
                console.log('No speech was detected. Try again.')
            }
        }

        this.recognition.onspeechend = () => {
            this.setState({ ...this.state, started: false })
        }
    }

    render () {
        const cn: any = []

        const { started, speaks } = this.state
        const { children } = this.props

        cn.push(css.button)

        if (started) {
            cn.push(css.started)
        }

        const childrenWithProps = React.Children.map(children, (input: any) => {
            let inputValue = ''

            if (speaks.length) {
                inputValue = speaks.join(' ')
            }

            return React.cloneElement(input, {
                value: inputValue || ''
            })
        })

        return (
            <div className={css.wrapper}>
                {childrenWithProps}

                <button type="button" onClick={this.handleToggle} className={cn.join(' ')}>
                    <img src={require('./assets/microphone.svg')} className={css.icon} alt="" />
                </button>
            </div>
        )
    }
}
