import './slider.css';
import { Swiper, SwiperProps } from "swiper/react";
import { ReactNode } from "react";
import { Pagination, A11y } from "swiper/modules";
import 'swiper/css'; 
import 'swiper/css/pagination';


interface SliderProps {
    settings: SwiperProps
    children: ReactNode
}

export default function Slider({ settings, children }: SliderProps) {
    return (
        <Swiper modules={[Pagination, A11y]} {...settings}>
            {
                children
            }
        </Swiper>
    );
}