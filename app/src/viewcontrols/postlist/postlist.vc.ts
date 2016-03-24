import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostrequestsService from '../../services/postrequests/postrequests.svc';
import ComposepostViewControl from '../composepost/composepost.vc';
import SinglepostViewControl from '../singlepost/singlepost.vc':

export default class PostListViewControl extends BaseViewControl {

    constructor(private postSvc: PostrequestsService) {
        super();
    };

    templateString: string = require('./postlist.vc.html');

    context: any = {};

    ComposePost(): void {
        this.navigator.navigate(ComposepostViewControl)
    }

    navigatedTo(): void {
        this.postSvc.getPosts().then((posts) => {
            this.context.posts = posts.reverse();
            console.log(posts);
        });
    }

    getSpecificPost(id: string): void {
        this.navigator.navigate(SinglepostViewControl, {
            parameters: {
                id: id
            },
        });
    }





}



register.viewControl('postlist-vc', PostListViewControl, [PostrequestsService]);
