import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    renderComments(comments) {
        if (comments != null) {


            const commentsList = comments.map((comment) => {
                return (
                    <li key={comment.id} >

                        <p>{comment.comment}</p>
                        <p>-- {comment.author},
                            &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(comment.date))}
                        </p>
                    </li >
                );
            });

            return (

                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentsList}
                    </ul>

                </div>

            );
        }

        else {
            return (
                <div>

                </div>
            );
        }
    }

    renderDish(dish) {

        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>

                    </CardBody>
                </Card>
            );
        }

        else {
            return (
                <div>

                </div>
            );
        }
    }

    render() {

        return (
            <div className="row">

                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>

                {this.renderComments(this.props.dish.comments)}
            </div>
        );
    }
}


export default DishDetail