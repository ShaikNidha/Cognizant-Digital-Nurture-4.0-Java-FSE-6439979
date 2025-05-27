SELECT user_id, event_id, COUNT(*) AS times_registered
FROM Registrations
GROUP BY user_id, event_id
HAVING COUNT(*) > 1;
