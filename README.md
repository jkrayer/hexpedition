# Hexpedition

Owlbear Rodeo for hex crawls.

## Notes from Index

### UI

1. compass rose
2. Lock: perhaps it could issue a lock after each move so the owner can execute their process

### Database

#### "map" table

For map data.

| name        | type     |
| ----------- | -------- |
| ID          | Int      |
| NAME        | String   |
| MAP_HEIGHT  | SmallInt |
| VIEW_RADIUS | SmallInt |
| START_HEX   | SmallInt |
| MAP_DATA    | JSON     |

#### "instance" table

For re-using maps.

| name     | type   |
| -------- | ------ |
| ID       | Int    |
| NAME     | String |
| MAP_ID   | Int    |
| MAP_DATA | JSON   |

## TO DO

1. Add procedural features
   1. Roll for randos when a hex is entered

## PROCESS NOTES

So the process becomes

1. user selects hex
2. icon is moved
3. The entered hexes and viewed hexes are calculated and updated ()
4. A diff of ids is produced

meanwhile the game loop looks for the diff list and re-renders just those hexes when it's full the diff would therefore need to be a queue that the game loop could access and deplete.

the reason I'm thinking queue right now is becuase game state and rendering could operate independently ... both update the queue but the loop doesn't care when the queue is updated it just takes a piece when available

Now the diff ids is a good idea locally but if I had to send this over a server then just the ids would be meaningless on another computer. so the diff must naturally be changes hexes that can be merged into local state. but also if I'm sending to a server then I don't think I'd want to merge diff and data so maybe the updated mao passed so the server with the diff id list that way a consunder can replace the board for refreshed and use the diff to get those cells for updating the dome So the process becomes

1. user selects hex
   1. But it has to be a sibling hex
2. icon is moved
3. The entered hexes and viewed hexes are calculated and updated ()
4. A diff of ids is produced
5. local ui updates
6. Diff and map update are sent to the server
7. The server saves data and also relays updated data to other users 8.
