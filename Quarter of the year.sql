SELECT month, CAST(CEILING(month / 3.0) AS INT) AS res 
FROM quarterof