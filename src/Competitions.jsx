import React, { useEffect, useState } from 'react';import { getallEvents } from './service/api';
import { useParams } from 'react-router-dom';


function Competitions() {
    const { id } = useParams();
    const [competitions, setCompetitions] = useState([]);
    const [selectedCompetition, setselectedCompetition] = useState(null);

    useEffect(() => {
        const fetchCompetitions = async () => {
            try {
                const competitions = await getallEvents(id);
                setCompetitions(competitions.data);
            } catch (err) {
                console.log('Error:', err);
            }
        };
        fetchCompetitions();
    }, [id]);

    const handleEventClick = (competition) => {
        setselectedCompetition(competition);
    };

    return (
        <div>
            {competitions.map((comp, index) => (
                <div key={index} onClick={() => handleEventClick(event)}>
                    <h2>{comp.name}</h2>
                    <p>{comp.fees}</p>
                    <p>{comp.date}</p>
                    <p>{comp.description}</p>
                </div>
            ))}
            {selectedCompetition && (
                <div>
                    <h2>{selectedEvent.name}</h2>
                    <p>{selectedEvent.description}</p>
                </div>
            )}
        </div>
    );
}

export default Competitions
