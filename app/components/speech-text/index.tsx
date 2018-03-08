import * as React from 'react'
import * as css from './styles.scss'

interface T {
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
}

declare var window: WindowInterface
/* eslint-enable */

export default class SpeechText extends React.Component<T, S> {
    static defaultProps = {
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
        this.recognition.continuous = true
        this.recognition.interimResults = false
        this.recognition.maxAlternatives = 5

        this.recognition.lang = ['ru-RU', 'en-US', 'en-GB']

        this.recognition.onresult = (event) => {
            const { speaks } = this.state

            const matter: any = []

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                matter.push(event.results[i][0].transcript)
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
            return React.cloneElement(input, {
                value: speaks.join(' ')
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

// var grammar = '#JSGF V1.0 grammar colors public <color> = aqua | azure | beige
// | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia
// | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender
// | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru
// | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle
// | tomato | turquoise | violet | white | yellow '
// var recognition = new SpeechRecognition()
// var speechRecognitionList = new SpeechGrammarList()
// speechRecognitionList.addFromString(grammar, 1)
// recognition.grammars = speechRecognitionList
// //recognition.continuous = false
// recognition.lang = 'en-US'
// recognition.interimResults = false
// recognition.maxAlternatives = 1

// var diagnostic = document.querySelector('.output')
// var bg = document.querySelector('html')

// document.body.onclick = function() {
//   recognition.start()
//   console.log('Ready to receive a color command.')
// }

// recognition.onresult = function(event) {
//   var color = event.results[0][0].transcript
//   diagnostic.textContent = 'Result received: ' + color
//   bg.style.backgroundColor = color
// }

// var langs =
// [['Afrikaans', ['af-ZA']],
// ['Bahasa Indonesia', ['id-ID']],
// ['Bahasa Melayu', ['ms-MY']],
// ['Català', ['ca-ES']],
// ['Čeština', ['cs-CZ']],
// ['Deutsch', ['de-DE']],
// ['English', ['en-AU', 'Australia'],
// ['en-CA', 'Canada'],
// ['en-IN', 'India'],
// ['en-NZ', 'New Zealand'],
// ['en-ZA', 'South Africa'],
// ['en-GB', 'United Kingdom'],
// ['en-US', 'United States']],
// ['Español', ['es-AR', 'Argentina'],
// ['es-BO', 'Bolivia'],
// ['es-CL', 'Chile'],
// ['es-CO', 'Colombia'],
// ['es-CR', 'Costa Rica'],
// ['es-EC', 'Ecuador'],
// ['es-SV', 'El Salvador'],
// ['es-ES', 'España'],
// ['es-US', 'Estados Unidos'],
// ['es-GT', 'Guatemala'],
// ['es-HN', 'Honduras'],
// ['es-MX', 'México'],
// ['es-NI', 'Nicaragua'],
// ['es-PA', 'Panamá'],
// ['es-PY', 'Paraguay'],
// ['es-PE', 'Perú'],
// ['es-PR', 'Puerto Rico'],
// ['es-DO', 'República Dominicana'],
// ['es-UY', 'Uruguay'],
// ['es-VE', 'Venezuela']],
// ['Euskara', ['eu-ES']],
// ['Français', ['fr-FR']],
// ['Galego', ['gl-ES']],
// ['Hrvatski', ['hr_HR']],
// ['IsiZulu', ['zu-ZA']],
// ['Íslenska', ['is-IS']],
// ['Italiano', ['it-IT', 'Italia'],
// ['it-CH', 'Svizzera']],
// ['Magyar', ['hu-HU']],
// ['Nederlands', ['nl-NL']],
// ['Norsk bokmål', ['nb-NO']],
// ['Polski', ['pl-PL']],
// ['Português', ['pt-BR', 'Brasil'],
// ['pt-PT', 'Portugal']],
// ['Română', ['ro-RO']],
// ['Slovenčina', ['sk-SK']],
// ['Suomi', ['fi-FI']],
// ['Svenska', ['sv-SE']],
// ['Türkçe', ['tr-TR']],
// ['български', ['bg-BG']],
// ['Pусский', ['ru-RU']],
// ['Српски', ['sr-RS']],
// ['한국어', ['ko-KR']],
// ['中文', ['cmn-Hans-CN', '普通话 (中国大陆)'],
// ['cmn-Hans-HK', '普通话 (香港)'],
// ['cmn-Hant-TW', '中文 (台灣)'],
// ['yue-Hant-HK', '粵語 (香港)']],
// ['日本語', ['ja-JP']],
// ['Lingua latīna', ['la']]];
