import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostrequestsService from '../../services/postrequests/postrequests.svc';
import PostlistViewControl from '../../viewcontrols/postlist/postlist.vc';



export default class ComposePostViewControl extends BaseViewControl {

    constructor(private postSvc: PostrequestsService) {
        super();
    };

    templateString: string = require('./composepost.vc.html');


    context = {
        post: {
            title: '',
            content: '',
            author: ''
        }
    };

    submitPost(): void {
        let blogPost: models.IPost = {
            title: this.context.post.title,
            author: this.context.post.author,
            content: this.context.post.content
        }
        this.postSvc.newPost(blogPost).then((success: Array<models.IPost>) => {
            console.log(blogPost);
            console.log(success);
            this.navigator.navigate(PostlistViewControl)

        });





    }



}

register.viewControl('composepost-vc', ComposePostViewControl, [PostrequestsService]);
