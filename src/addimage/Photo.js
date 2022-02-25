import React, { Component } from 'react'

import './Photo.css'

//This file consists of the image holder
// consists of the function  for fetching image from file system

export class Photo extends Component {

    // This state provides the default image

    state={
        profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      }




       // The following code reads the photo from file system

      imageHandler = (e) =>{
        const reader = new FileReader();
        reader.onload = () => {
          if(reader.readyState === 2){
            this.setState({profileImg: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
      }



      // The following code displays the profile pic

    render() {
        const {profileImg} = this.state
        return (
            <div className="pages">
        <div className='container1'>
          <h1 className='heading1'>Add Image</h1>
          <div className='img-holder1'>
            <img src={profileImg} alt='' id='img' className='img1'/> 
          </div>
          <input type="file" name="image-upload" id='input' accept='image/*' onChange={this.imageHandler}/>
          <div className='label1'>
            <label htmlFor='input' className='image-uploadd'>
              <i className='material-icons'>add_photo_alternate</i>
              Select a Photo
            </label>
      
          </div>
  
        </div>
        
      </div>
        )
    }
}

export default Photo
