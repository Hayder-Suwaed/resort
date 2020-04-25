import React, { Fragment } from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <Fragment>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </Fragment>
  );
}

export default withRoomConsumer(RoomContainer);
