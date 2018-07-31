# Kodak Moment

Kodak Moment is an Instagram inspired clone that allow users to share their experiences through photos. Users can show their love by liking the photo and/or leaving a comment on the photo.

[Share your photos on Kodak Moment!](https://kodak-moment.herokuapp.com/)

## Table of Contents

- [Technology](#technology)
- [Features](#features)
- [Maintainers](#maintainers)
- [License](#license)

## Technology

Kodak Moment is a single-page web application that was built using React and Redux for the frontend and Ruby on Rails for the backend. The database is configured with PostgreSQL and all user uploaded images are stored on Cloudinary.

## Features

### Home Feed

![Home Feed](https://github.com/w-chun/Kodak/blob/master/screenshots/home_feed.png)

The home feed contains posts from all users that you follow in the order of the posts shared most recently. Users can like or comment on each post to show their love for the post.

### Profile

![Profile](https://github.com/w-chun/Kodak/blob/master/screenshots/profile.png)

The user profile displays all your profile information, which includes number of posts, number of followers, number of users following, and all your posts on Kodak Moment. This is also where you can edit your profile username and profile photo.

### Photo Upload

![Photo Upload](https://github.com/w-chun/Kodak/blob/master/screenshots/photo_upload.png)

This photo upload form will pop up when you click on the upload button on navigation bar. By clicking the `choose file` button, a widget from Cloudinary will pop up which allows you to upload a file from your computer, upload a photo from a public URL, or take a photo of yourself through your webcam. After finishing the upload, you'll see a preview of the photo and then you can decide if you want to leave a caption or not before posting onto Kodak Moment.

```javascript
// post_form.jsx

uploadPhoto(e){
  e.preventDefault();

  cloudinary.openUploadWidget(
    window.cloudinary_options,
    function (err, results){
      if (!err) {
        let newState = Object.assign({}, this.state, {img_url: results[0].url});
        this.setState(newState);
      }
    }.bind(this));
}

handleSubmit(e){
  e.preventDefault();

  const post = Object.assign({}, this.state);
  this.props.createPost(post).then(this.props.history.push('/'));
  this.closeModal();
}
```

In order to upload the image url to rails, I had to set the new state as the results from the success of the ```uploadPhoto()``` function before calling the ```createPost()``` action as seen above.

## Maintainers

[@w-chun](https://github.com/w-chun)

## License

ISC © 2018 Wilson
