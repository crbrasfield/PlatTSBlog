import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostListViewControl from '../postlist/postlist.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {};
    
    
    
    toPostlist(): void {
        this.navigator.navigate(PostListViewControl)
    }
    
    
}

register.viewControl('home-vc', HomeViewControl);
