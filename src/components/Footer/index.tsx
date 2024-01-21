import { FC } from "react";

interface IProps {
    text: string;
}

const Footer:FC<IProps> = ({text}) => {
    return <div>{text}</div>
}

export default Footer;