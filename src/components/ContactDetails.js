import React from 'react';

export default class ContactDetails extends React.Component {
    render() {

        // ���õǾ��� �� ������ �κ�
        const details = (
            <div>
                <p>{ this.props.contact.name }</p>
                <p>{ this.props.contact.phone }</p>
            </div>
        );

        // �ƹ��͵� ���õ��� �ʾ��� �� ������ �κ�
        const blank = (
            <div> Nothing is Selected </div>
        );

        return(
            <div>
                <h2>Details</h2>

                { /* isSelected props ���� ���� ��� �������� ���Ѵ�
                 ternary expression condition ? true : false */ }

                { this.props.isSelected ? details : blank }

            </div>
        );
    }
}

ContactDetails.defaultProps = {
    contact : {
        name : '',
        phone : ''
    }
}