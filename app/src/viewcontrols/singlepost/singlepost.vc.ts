import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostlistViewControl from '../postlist/postlist.vc';
import PostrequestsService from '../../services/postrequests/postrequests.svc';
import PostRepository from '../../repositories/postrepository/postrepository.repo'


export default class SinglePostViewControl extends BaseViewControl {
    templateString: string = require('./singlepost.vc.html');

    constructor(private postRepo: PostRepository) {
        super();
    };

    context: any = {
        
    };

    navigatedTo(parameter: {id: string}): void {
        let id = parameter.id;
        this.postRepo.getSpecificPost(id).then((returnedPost) => {
            console.log(returnedPost);
            this.context = returnedPost;
        });
    }
}

register.viewControl('singlepost-vc', SinglePostViewControl, [PostrequestsService, PostRepository]);
