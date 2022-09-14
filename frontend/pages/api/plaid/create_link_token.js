import {createLinkToken} from "../../../lib/plaid";

export default async (req, res) => {
    
    switch (req.method) {
    case 'POST':
        const [setStatus, setOutput] = await createLinkToken(req.body);
        res.status(setStatus).json(setOutput);
        break;
    default:
        res.status(405).end();
        break;
    }
};
