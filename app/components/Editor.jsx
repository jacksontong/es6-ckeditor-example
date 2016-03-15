import React from 'react';

class Editor extends React.Component {
    render() {
        return <textarea name="text_jackson" id="jackson" cols="30" rows="10" defaultValue={this.props.text} />;
    }
    componentDidMount() {
        CKEDITOR.replace('jackson');
    }
    componentWillUnmount() {
        if (CKEDITOR.instances.jackson) CKEDITOR.instances.jackson.destroy();
    }
}

export default Editor