
type Participant = {
    id: string; // uuid, primary key, unique, default: gen_random_uuid()
    createdAt: string; // timestamp with time zone, default: now()
    updatedAt: string; // timestamp with time zone, default: now()
    name: string; // text, unique
};

export default Participant;