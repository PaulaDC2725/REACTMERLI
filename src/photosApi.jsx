import React, { Component } from "react";
import { unmountComponentAtNode } from "react-dom";
import axios from "axios";

class FotosApi extends Component{

    constructor(props){
        super(props);

        this.state = {
            photos: []
        }

    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(resp => {
            this.setState({
                photos: resp.data
            })
        })
    }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/photos', {method: 'get'})
    //     .then(response => response.json())
    //     .then(dataResponse => {
    //         this.setState({
    //             posts: dataResponse
    //         })
    //     });
    // }

    render(){
        const {photos} = this.state
        return (
            <>
                <div>
                    {
                        photos.map( u => (
                            <>
                               <p>{u.albumId}</p> 
                               <p>{u.id}</p> 
                               <p>{u.title}</p> 
                               <img src={u.url}></img>
                               <img src={u.thumbnailUrl}></img>
                               <hr/>
                            </>
                        ))
                    }
                </div>
            </>
        )
    }

}

export default FotosApi;