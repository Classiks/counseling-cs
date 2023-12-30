import StepLogo from "../assets/images/step_logo_cut.png";
import GirlsInHammock from "../assets/images/girls-hammock.jpg";
import ParentChildConcrete from "../assets/images/parent-child-concrete.jpg";
import ChildOnArm from "../assets/images/adult-child-on-arm-black-white.jpg";
import NewbornFist from "../assets/images/adult-child-fist.jpg";
import Slideshow from "../Slideshow/Slideshow";

export default function Homepage() {
    return <div>
        <div className="flex justify-end">
                <img
                    src={StepLogo}
                    className="w-40  m-5 bg-step-complementary-400 rounded-[50%] mx-5 my-2"
                    alt=""
                />
            
        </div>
        <div className="w-full flex justify-center">
                <Slideshow 
                    className="w-1/2 aspect-square rounded-full"
                    images={[GirlsInHammock, ParentChildConcrete, ChildOnArm, NewbornFist]} 
                />
                {/* <div className=" rounded-[100%] w-3/4">
                    <img
                        src={GirlsInHammock}
                        alt=""
                    />
                </div> */}
        </div>
    </div>
}
