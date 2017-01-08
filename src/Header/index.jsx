import React, { Component, PropTypes } from 'react';
import { isEmpty, map, values, prop, equals } from 'ramda';

import './style.css';

class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            letters: {},
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
     this.blurOneLetter();
    }

    blurOneLetter() {
        const title = this.state.title;
        let letters;

        const getLettersTitle = () => values(map(prop('letter'), this.state.letters))
        const randomBlur = () => Math.floor(Math.random() * 15);
        const randomIndex = Math.floor(Math.random() * title.length);

        if (isEmpty(this.state.letters) || !equals(getLettersTitle(), title.split(''))) {
            letters = {};
            title.split('').forEach((letter, index) => {
                letters[index] = { index, letter: letter, blur: 1 };
            });
        } else {
            letters = this.state.letters;
        }

        this.setState({
            letters: Object.assign(
                {}, letters, { [randomIndex]:{ ...letters[randomIndex], blur: randomBlur() }}
            ),
        });
        setTimeout(() => this.blurOneLetter(), 100);
    }

    handleChange(e, value) {
        this.setState({ title: e.target.value});
    }

    render() {;
        const letters = values(this.state.letters);
        return (
            <div className='hd-container'>
                <div>
                    {map(letter =>
                        <span
                            key={letter.index}
                            style={{
                                textShadow: `2px 2px ${letter.blur}px #FFF`,
                                color: 'transparent',
                                transition: 'text-shadow 0.40s ease'
                            }}
                        >
                            {letter.letter}
                        </span>
                    , letters)}
                </div>
                <input
                    type='text'
                    onChange={this.handleChange}
                    value={this.state.title}
                    className='hd-input'
                />
                <span className='hd-input-label'>↑ Type your name here ↑</span>
            </div>
        );
    }
}

export default Header;
