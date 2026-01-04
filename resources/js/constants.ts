import { Product, Solution } from './types';

export const PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'SIGNA™ Premier MRI',
        category: 'MRI',
        image: 'https://picsum.photos/seed/mri/600/400',
        description: 'The SIGNA™ Premier is a wide bore 3.0T MRI system designed to deliver high-performance imaging with exceptional patient comfort.',
        features: ['HyperBand', 'AIR™ Recon DL', 'SuperG Gradient', '70cm Wide Bore']
    },
    {
        id: '2',
        name: 'Revolution™ Apex CT',
        category: 'CT',
        image: 'https://picsum.photos/seed/ct/600/400',
        description: 'Revolution™ Apex platform provides uncompromised image quality and clinical capabilities for the most challenging cases.',
        features: ['TrueFidelity™ Image', 'Quantix™ 160 Tube', '0.28s Rotation', '160mm Detector']
    },
    {
        id: '3',
        name: 'LOGIQ™ E10 Ultrasound',
        category: 'Ultrasound',
        image: 'https://picsum.photos/seed/us/600/400',
        description: 'The LOGIQ™ E10 Series is our leadership ultrasound system for general imaging, delivering confident diagnosis and tools.',
        features: ['cSound™ Architecture', 'XDclear™ Probes', 'AI Tools', 'Volume Navigation']
    },
    {
        id: '4',
        name: 'Definium™ 656 HD X-Ray',
        category: 'X-Ray',
        image: 'https://picsum.photos/seed/xray/600/400',
        description: 'The Definium™ 656 HD is a versatile, digital radiographic system powered by Helix™ 2.0 advanced image processing.',
        features: ['Helix™ 2.0 Processing', 'Auto Image Paste', 'Volume Rad', 'Motorized Assist']
    },
    {
        id: '5',
        name: 'CARESCAPE™ B650 Monitor',
        category: 'Patient Monitoring',
        image: 'https://picsum.photos/seed/monitor/600/400',
        description: 'CARESCAPE™ B650 monitor helps you manage patient flow by providing the right clinical information, when and where you need it.',
        features: ['Clinical Decision Support', 'Mobility', 'Connectivity', 'Touchscreen']
    }
];

export const SOLUTIONS: Solution[] = [
    {
        id: '1',
        title: 'Cardiology',
        summary: 'Integrated cardiovascular care solutions helping you make confident decisions at every step of the pathway.',
        icon: '❤️',
        image: 'https://picsum.photos/seed/cardio/600/800'
    },
    {
        id: '2',
        title: 'Oncology',
        summary: 'Comprehensive oncology solutions connecting data across the cancer care continuum for precision health.',
        icon: '🎗️',
        image: 'https://picsum.photos/seed/onco/600/800'
    },
    {
        id: '3',
        title: 'Neurology',
        summary: 'Advancing neurology care with innovative imaging and diagnostic technologies for brain and spine health.',
        icon: '🧠',
        image: 'https://picsum.photos/seed/neuro/600/800'
    }
];

export const SERVICES = [
    {
        slug: 'equipment-maintenance',
        title: 'Equipment Maintenance',
        description: 'Comprehensive service plans to ensure your medical equipment operates at peak performance.',
        fullDescription: 'Our equipment maintenance services are designed to maximize uptime and extend the life of your assets. We offer a range of service agreements, from preventive maintenance to full coverage, tailored to your specific needs and budget.'
    },
    {
        slug: 'technical-support',
        title: 'Technical Support',
        description: '24/7 technical assistance for all our products and solutions.',
        fullDescription: 'Get access to our global network of technical experts around the clock. Whether you need remote troubleshooting or on-site assistance, our team is ready to help you resolve issues quickly and minimize disruption to your clinical operations.'
    },
    {
        slug: 'installation-integration',
        title: 'Installation & Integration',
        description: 'Expert installation and seamless integration of new equipment into your facility.',
        fullDescription: 'Our project management and installation teams ensure that your new equipment is installed correctly and integrated seamlessly with your existing IT infrastructure and clinical workflows. We handle everything from site planning to final testing.'
    },
    {
        slug: 'asset-management',
        title: 'Asset Management',
        description: 'Digital tools to track and manage your medical equipment lifecycle.',
        fullDescription: 'Gain visibility into your asset inventory, utilization, and maintenance history with our asset management solutions. We help you make data-driven decisions to optimize your fleet, reduce costs, and improve operational efficiency.'
    }
];
