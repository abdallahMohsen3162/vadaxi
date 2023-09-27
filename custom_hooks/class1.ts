
import { useRef } from "react";
class Slider{
    constructor(public scroll_positive:number = 100,public scroll_negative:number = -100){ }
    
    useSlider(){
        const ref = useRef<HTMLDivElement>(null);
        const scroll_right = () =>{
            ref.current?.scrollBy(this.scroll_positive,0);
        }
        const scroll_left = () =>{
            ref.current?.scrollBy(this.scroll_negative,0);
        }
        return {ref, scroll_left, scroll_right}
    }
}

export default Slider;