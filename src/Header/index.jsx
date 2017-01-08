import React, { Component, PropTypes } from 'react';
import { split, isEmpty, map, values } from 'ramda';

import './style.css';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            title: null,
            letters: {},
        }
    }

    componentWillMount() {
        setInterval(this.blurOneLetter(), 300);
    }

    blurOneLetter() {
        const TITLE = 'Taskim';
        let LETTERS;

        if (!isEmpty(this.state.letters)) {
            LETTERS = this.state.letters;
        }
        else {
            LETTERS = {};
            TITLE.split('').forEach((letter, index) => {
                LETTERS[index] = { index, letter: letter, blur: 1 };
            });    
        }
        
        const randomBlur = () => Math.floor(Math.random() * 20);
        const randomIndex = Math.floor(Math.random() * TITLE.length);
        this.setState({
            letters: Object.assign(
                {},
                LETTERS,
                { [randomIndex]:{
                    ...LETTERS[randomIndex],
                    blur: randomBlur()
                }}
            ),
        });
        setTimeout(() => this.blurOneLetter(), 100);
    }

    render() {;
        const val = values(this.state.letters);
        return (
            <div className='hd-container'>
                {map(letter =>
                    <span
                        key={letter.index}
                        style={{ textShadow: `2px 2px ${letter.blur}px #FFF`, color: 'transparent', transition: 'text-shadow 0.25s ease' }}
                    >
                        {letter.letter}
                    </span>
                , val)}
            </div>
        );
    }
}

export default Header;
