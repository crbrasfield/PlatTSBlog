import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostrequestsService from '../../services/postrequests/postrequests.svc';
import ComposepostViewControl from '../composepost/composepost.vc';
import SinglepostViewControl from '../singlepost/singlepost.vc';
import PostRepository from '../../repositories/postrepository/postrepository.repo'

export default class PostListViewControl extends BaseViewControl {

    constructor(private postRepo: PostRepository) {
        super();
    };

    templateString: string = require('./postlist.vc.html');

    context: any = {};

    ComposePost(): void {
        this.navigator.navigate(ComposepostViewControl)
    }

    navigatedTo(): void {
        this.postRepo.getPosts().then((posts) => {
            this.context.posts = posts.reverse();
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





register.viewControl('postlist-vc', PostListViewControl, [PostrequestsService, PostRepository]);
