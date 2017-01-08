import React, { Component } from 'react';
import { without } from 'ramda';

import './style.css';

class Logo extends Component {
    constructor() {
        super();
        this.state = {
            smiley: 'ヽ(。_°)ノ',
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const smileys = without(this.state.smiley, ['ヾ(●ω●)ノ','╭∩╮ (òÓ,) ╭∩╮', 'ʘ‿ʘ',
            '乁( ◔ ౪◔)ㄏ', 'ᕙ(ຈل͜ຈ)ᕗ', '(┛ಠ_ಠ)┛彡┻━┻', 'ヘ(￣ω￣ヘ)', '( つ ◕_◕ )つ', '¯\\(◉‿◉)/¯',
            '¯\\_(ツ)_/¯', 'ಠoಠ', '[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]', 'ಥ╭╮ಥ', '(ง ͡ʘ ͜ʖ ͡ʘ)ง']);

        const randomPickSmiley = () => smileys[Math.floor(Math.random() * smileys.length)];

        this.setState({ smiley: randomPickSmiley() });
    }

    render() {
        return (
            <button
                className='lg-button'
                onClick={this.handleClick}
            >
                {this.state.smiley}
            </button>
        );
    }
}

export default Logo;
