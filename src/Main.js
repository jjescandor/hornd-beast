import React from 'react';


class Main extends React.Component {
    render() {
        return (
            <>
                <Snack title={'Pizza Rolls'} description={'Burns my mouth every time!'} />
                <Snack title={'Hot Cheetos'} description={'GUUUUUUUD'} />
                <Snack title={'Reese Mini Cups'} description={'Additive af'} />
                <Snack title={'Herserys Bar'} description={'Fix my bad days'} />
            </>
        )
    }
}

export default Main;