class App extends Component {
    constructor (props) {
        super(props);
        this.context = new (window.AudioContext || window.webkitAudioContext)();
    }

    play = () => {
        this.source = context.createBufferSource();
        this.source.buffer = this.buffer;
        this.destination = context.destination;
        this.source.connect(this.destination);
        this.source.start(0);
    };

    stop = () => {
        this.source.stop(0);
    };


    loadSoundFile = (url) => {
         let xhr = new XMLHttpRequest();
         xhr.open('GET', url, true);
         xhr.responseType = 'arraybuffer'; // важно
         xhr.onload = function(e) {
            this.context.decodeAudioData(this.response,
                function(decodedArrayBuffer) {
                    this.buffer = decodedArrayBuffer;
                }, function(e) {
                    console.log('Error decoding file', e);
                });
        };
        xhr.send();
    };

    componentDidMount () {
        this.loadSoundFile('audio/i_see_you.mp3');
    }

    render () {
        return (
            <div>
                <audio controls>
                    <source src='audio/i_see_you.mp3' />
                </audio>
            </div>
        );
    }
}
