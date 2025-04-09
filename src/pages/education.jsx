import { useEffect } from "react";
import PropTypes from "prop-types";
import ContentImageSplit from "../components/page_elements/element_5050-content-image.jsx";
import image from "../assets/images/inb.jpg";
import BCA from "../assets/images/Branston.jpg";

export default function Education({ setTitle }) {
    useEffect(() => {
        setTitle("Education");
        document.title = "Education - My Website";
    }, [setTitle]);

    const blocks = [
        {
            id: 1,
            title: 'GCSEs',
            text: 'I received 10 GCSEs at grades A*-C between 20XX and 20XX at My School, including:',
            image: BCA,
            list: ['English Literature: 7','English Language: 4', 'Mathematics: 7', 'Science (Double Award): 5,5', 'History: 6', 'I-Media: Pass-2', 'Religous studies: 6', 'Business BTEC: 6'],
            anchor: 'gcses',
            reversed: false
        },
        {
            id: 2,
            title: 'A Levels',
            text: 'I completed two A-Level Equivolent qualifications, Double BTEC In IT and A single award for Applied Sience',
            image: image,
            anchor: 'alevels',
            reversed: true
        },
        {
            id: 3,
            title: 'Bachelor\'s Degree in Computer Science',
            text: 'I am currently studying for my BSc (Hons) in Computer Science at the University of Lincoln, where I have studied modules such as programming fundamentals, Object Oriented Programming and Operating systems.',
            image: image,
            anchor: 'bachelors',
            reversed: false
        },
    ];

    return (
        <>
            {blocks.map((item) => (
                <ContentImageSplit key={item.id} title={item.title} text={item.text} imageSrc={item.image} list={item.list} anchor={item.anchor} reversed={item.reversed} />
            ))}
        </>
    )
}

Education.propTypes = {
    setTitle: PropTypes.func.isRequired
};