import StepLogo from "../assets/images/step_logo_cut.png";
import Slideshow from "../Slideshow/Slideshow";
import BlendingInDiv from "../components/BlendingInDiv";

import GirlsInHammock from "../assets/images/girls-hammock.jpg";
import ParentChildConcrete from "../assets/images/parent-child-concrete.jpg";
import ChildOnArm from "../assets/images/adult-child-on-arm-black-white.jpg";
import NewbornFist from "../assets/images/adult-child-fist.jpg";

export default function Homepage() {
    return <BlendingInDiv>
        <div className="flex justify-end">
                <img
                    src={StepLogo}
                    className="w-40  m-5 bg-step-complementary-300 rounded-[50%] mx-5 my-2"
                    alt=""
                />
            
        </div>
        <div className="w-full flex justify-center">
                <Slideshow 
                    className="w-1/2 aspect-square rounded-full"
                    images={[GirlsInHammock, ParentChildConcrete, ChildOnArm, NewbornFist]} 
                    interval={15000}
                />
        </div>
    </BlendingInDiv>
}
