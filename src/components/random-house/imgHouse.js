import React from 'react';

export default class ImgHouse extends React.Component {

    render() {

        return (
            <React.Fragment>
                <img id='lion' className='hidden' src='https://vignette.wikia.nocookie.net/harrypotter/images/0/01/Gryffindor.png/revision/latest?cb=20150807113230&path-prefix=ru'/>
                <img id='serpent' className='hidden' src='https://vignette.wikia.nocookie.net/harrypotter/images/f/fe/Slytherin_.png/revision/latest/scale-to-width-down/350?cb=20150804131752&path-prefix=ru'/>
                <img id='eagle' className='hidden' src='https://vignette.wikia.nocookie.net/harrypotter/images/b/b8/Ravenclaw1.png/revision/latest?cb=20150807113300&path-prefix=ru'/>
                <img id='badger' className='hidden' src='https://vignette.wikia.nocookie.net/harrypotter/images/c/c9/Hufflepuff.png/revision/latest?cb=20150807113309&path-prefix=ru'/>
            </React.Fragment>
        )
    }
}
