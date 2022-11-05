import { PageDataItems } from "src/app/components/page-data/page-data";
import { PageHeaderItems } from "src/app/components/page-header/page-header-items";
import { PrizeCard } from "src/app/components/prize-card/prize-card";
import { Line } from "three";

export const kaggle2022Header: PageHeaderItems[] = [
    {
        title: 'Kaggle #2: HuBMAP + HPA - Hacking the Human Body',
        subtitle: 'Algorithm development challenges that engage teams from around the globe to develop code for Human Reference Atlas construction',
        image: 'assets/images/kaggle.svg'

    }
]

export const overviewData: PageDataItems[] = [
    {
        heading: 'Overview',
        descriptions: `When you think of “life hacks,” normally you’d imagine productivity techniques. But how about the kind that helps you understand your body at a molecular level? It may be possible! Researchers must first determine the function and relationships among the 37 trillion cells that make up the human body. A better understanding of our cellular composition could help people live healthier, longer lives.
        <br><br>A previous <a href="https://www.kaggle.com/c/hubmap-kidney-segmentation" target="_blank">Kaggle competition</a> aimed to segment cell population neighborhoods that perform an organ’s main physiologic function, also called functional tissue units (FTUs). Manually segmenting FTUs (e.g., glomeruli in kidney or alveoli in the lung) is a time-consuming process. In the average kidney, there are over 1 million glomeruli FTUs. While there are existing cell and FTU segmentation methods, we want to push the boundaries by building algorithms that generalize across different organs and are robust across different dataset differences.
        <br><br>The Human BioMolecular Atlas Program (HuBMAP) is working to create a Human Reference Atlas at the cellular level. Sponsored by the National Institutes of Health (NIH), HuBMAP and Indiana University’s Cyberinfrastructure for Network Science Center (CNS) have partnered with institutions across the globe for this endeavor. A major partner is the Human Protein Atlas (HPA), a Swedish research program aiming to map the protein expression in human cells, tissues, and organs, funded by the Knut and Alice Wallenberg Foundation.
        <br><br>In this competition, participants aimed to identify and segment functional tissue units (FTUs) across five human organs. They built their models using a dataset of tissue section images, with the best submissions segmenting FTUs as accurately as possible.
        <br><br>If successful, they'll help accelerate the world’s understanding of the relationships between cell and tissue organization. With a better idea of the relationship of cells, researchers will have more insight into the function of cells that impact human health. Furthermore, the Human Reference Atlas constructed by HuBMAP will be freely available for use by researchers and pharmaceutical companies alike, potentially improving and prolonging human life.
        <br><br>Please see <a href="https://www.kaggle.com/competitions/hubmap-organ-segmentation" target="_blank">https://www.kaggle.com/competitions/hubmap-organ-segmentation</a> for competition details.`
    },
    {
        heading: 'Awards Ceremony',
        descriptions: `Judges announced winning teams at the annual HubMAP All-Hands Meeting and the HuBMAP Awards: Hacking the Human Body Kaggle ceremony. 
        A recording link of the event and competitor presentations will be posted at the 
        <a href="https://www.youtube.com/channel/UCbSvPJ9dXASL14KoDeutMFg" target="_blank">HuBMAP Consortium YouTube channel</a>.`
    }
]

export const acknowledgmentsData: PageDataItems[] = [
    {
        heading: 'Datasets',
        descriptions: `
        All data used in the competition will be made publicly 
        available as part of the scientific paper showcasing the results of the competition using the GitHub repository located at 
        <a href="https://github.com/cns-iu/ccf-research-kaggle-2022" target="_blank">
        https://github.com/cns-iu/ccf-research-kaggle-2022</a>.`
    },
    {
        heading: 'Acknowledgments',
        descriptions: `We would like to thank the many individuals that made this competition possible including:
        <br><br>
        <strong>Organizers:</strong> Andrea de Souza (Eli Lilly and Company), Katy Börner,
            Yashvardhan Jain (Indiana University), Emma Lundberg (Science for Life Laboratory), Cecilia
            Lindskog (Uppsala University, Sweden), Amy Kemper (Google).
            <br><br>
        <strong>Support Team:</strong> Lisel Record, Shriya Mandarapu (Indiana University), Trang Le
            (Stanford, Science for Life Laboratory).
            <br><br>
        <strong>Kaggle Sponsors:</strong> Google, Genentech (A member of the Roche Group), and
            Indiana University. 
            <br><br>
        <strong>Kaggle Judges:</strong> Zorina Galis (NIH), Carolina Wahlby (Uppsala University,
            Sweden), Artem Sokolov (Harvard), Constantin Kappel (Leica Microsystems) , Anna Kreshuk
            (EMBL), Blue Lake (UC San Diego), David Van Valen (CalTech), and Nathan Heath Patterson
            (Vanderbilt School of Medicine).
            <br><br>
        <strong>Funders:</strong> This work has been funded in part by the NIH Common Fund through
            the Office of Strategic Coordination/Office of the NIH Director under award OT2OD026671 and
            VU HuBMAP under award 1U54DK120058-01.
            <br><br>
        This research has been funded in part by the NIH Common Fund through the Office of Strategic
            Coordination/Office of the NIH Director under award OT2OD026671, NIH awards U54EY032442-01
            and U54HG010426-01, National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)
            award U54DK120058, U54DK120058, the NIDDK Kidney Precision Medicine Project grant
            U2CDK114886, and the Knut and Alice Wallenberg Foundation. The content is solely the
            responsibility of the authors and does not necessarily represent the official views of the
            National Institutes of Health.`
    }
]

export const accuracyPrizeData: PrizeCard[] = [
    {
        title: 'First Prize: (15,000)',
        winner: [{
            winner: 'I need SegFormer - <a href="https://www.kaggle.com/opusen" target="_blank">Opusen</a>',
            button: [
                {
                    label: 'Discussion Page',
                    link: 'https://www.kaggle.com/competitions/hubmap-organ-segmentation/discussion/356201'
                },
                {
                    label: 'Code Repository',
                    link: 'https://github.com/open-mmlab/mmsegmentation/tree/master/configs/segformer'
                }
            ]
        }],
        matDivider: false,
    },
    {
        title: 'Second Prize ($10,000)',
        winner: [{
            winner: '<a href="https://www.kaggle.com/victorsd" target="_blank">Victor Durnov</a>',
            button: [
                { label: 'Code Repository', link: 'https://www.kaggle.com/code/victorsd/2nd-place-inference/notebook?scriptVersionId=106240458' }
            ]
        }],
        matDivider: false,
    },
    {
        title: 'Third Prize',
        winner: [{
            winner: `Human Torus Team
        <br><a href="https://www.kaggle.com/igorkrashenyi" target="_blank">Igor Krashenyi</a>,
        <a href="https://www.kaggle.com/sakvaua" target="_blank">Dennis Sakva</a>,<br>
        <a href="https://www.kaggle.com/alexkirnas" target="_blank">Alexander Zarichkovyi</a>,
        <a href="https://www.kaggle.com/vladimirsydor" target="_blank">Volodymyr</a>`,
            button: [
                {
                    label: 'Code Repository',
                    link: 'https://www.kaggle.com/code/vladimirsydor/hubmap-2021-inference-v1/notebook?scriptVersionId=106283407'
                }
            ]
        }],
        matDivider: false,
    }
]

export const judgesPrizesData: PrizeCard[] = [
    {
        title: 'Scientific Prizes (2 x $10,000)',
        winner: [{
            winner: 'Team: Seungcheul Kim',
            button: [
                {
                    label: 'Summary Notebook',
                    link: 'https://www.kaggle.com/code/cheulkay/hubmap-hpa-presentation'
                },
                {
                    label: 'Code Notebook',
                    link: 'https://www.kaggle.com/code/cheulkay/hubmap-inference'
                }
            ]
        },
        {
            winner: `Team: Xiaoqi Jia`,
            button: [
                {
                    label: 'Interface Notebook',
                    link: 'https://www.kaggle.com/code/gray98/will-noisy-label-impede-the-performance-of-models'
                },
                {
                    label: 'Code Notebook',
                    link: 'https://www.kaggle.com/code/gray98/learning-with-noisy-label'
                }
            ]
        }],
        matDivider: false,
    },
    {
        title: 'Diversity Prize ($10,000)',
        winner: [{
            winner: 'Team: Nghi Huynh, Yuan Hong, Matteo Cacciola',
            button: [
                {
                    label: 'Code Notebook', link: 'https://www.kaggle.com/code/nghihuynh/hubmap-hpa-methodology-submission'
                }
            ]
        }],
        matDivider: false,
    }
]