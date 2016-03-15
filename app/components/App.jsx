import React from 'react';
import Paragraph from './Paragraph.jsx';
import Editor from './Editor.jsx';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            ckeditor: false,
            text: 'Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.'
        };
    }
    render() {
        const modal_style = {
            overflow: 'hidden'
        };

        return (
            <div className="row">
                <h1>Hello</h1>

                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#my-modal">Open Modal</button>

                <div className="col-lg-12">
                    <div className="modal fade" id="my-modal" tabIndex="-1" role="dialog">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <div className="col-md-3">
                                        <label htmlFor="area_type">Select Editor type</label>
                                        <select name="area_type"
                                                id="select_area"
                                                className="form-control"
                                                defaultValue="blank"
                                                onChange={this.update}>
                                            <option value="ckeditor">CKEdtior</option>
                                            <option value="blank">Blank</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="modal-body" style={modal_style}>
                                    <div className="col-md-12">
                                        {this.renderEditor()}
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    update = (e) => {
        const value = e.target.value;

        if (value === 'ckeditor') {
            this.setState({
                ckeditor: true
            })
        } else {
            this.setState({
                ckeditor: false
            });
        }
    };
    renderEditor() {
        if (this.state.ckeditor === true) {
            return <Editor text={this.state.text} />;
        }

        return <Paragraph />;
    }
}