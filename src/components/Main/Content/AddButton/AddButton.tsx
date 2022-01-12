import React, { FC } from "react";

interface ButtonProps {
    name?: string;
    className?: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const AddButton: FC<ButtonProps> = ({ name, className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {name}
        </button>
    );
};

export default AddButton;
