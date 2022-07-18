import WisdomTeeth from '../Images/wisdom-teeth-removal.png';
import DentalImplant from '../Images/dental-implants.png';
import ChildDentistry from '../Images/child-dentistry.png';
import Denture from '../Images/dentures.png';

const Data = [
    {
        id:"serviceSec-1",
        title:"Wisdom Teeth Removal",
        para:"Our Dentist can perform wisdom tooth removal in an affordable pain freeway, starting from $200*.",
        image: WisdomTeeth,
        link: '/service/wisdom-teeth-removal/'
    },
    {
        id:"serviceSec-2",
        title:"Dental - Implants",
        para:"Renew your smile and chewing ability. We offer complete implant procedure including Implant, Abutment and Crown.",
        image: DentalImplant,
        link: '/service/dental-implants/',
        anchor: null
    },
    {
        id:"serviceSec-3",
        title:"Child Benefit",
        para:"Eligible Kids can get up to $1000* worth of Free dental services.",
        image: ChildDentistry,
        link: '/service/child-benefit/',
        anchor: null
    },
    {
        id:"serviceSec-4",
        title:"Denture",
        para:"You don’t have to live with missing teeth. At Carrum Downs Dental we have affordable denture options.",
        image: Denture,
        link: '/service/denture/',
        anchor: null
    }
];

export default Data
