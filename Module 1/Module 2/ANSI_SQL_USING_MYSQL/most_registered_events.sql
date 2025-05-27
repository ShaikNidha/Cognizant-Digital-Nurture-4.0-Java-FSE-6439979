SELECT e.title, COUNT(r.registration_id) AS reg_count
FROM Events e
JOIN Registrations r ON e.event_id = r.event_id
GROUP BY e.event_id
ORDER BY reg_count DESC
LIMIT 3;
