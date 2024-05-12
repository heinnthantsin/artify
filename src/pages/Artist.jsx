import React from 'react'
import { TabTitle } from '../utils/GeneralFunctions'
import CardList from '../components/card/CardList'
import artistData from '../data/ArtistData'
import FollowingList from '../components/card/FollowingList'

function Artist() {
  TabTitle("Artify | Artist")

  return (
    <div>
      <CardList itemList={artistData} />
      <FollowingList itemList={artistData} sectionTitle={"New Artists"} />
    </div>
  )
}

export default Artist