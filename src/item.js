import React from 'react';

export default class Item extends React.Component {
  state = { showDescription: false }
  constructor(props) {
    super(props)
  }

  render() {
    const styles = {
      overlay: {
        backgroundColor: "transparent",
        height: "100%",
        width: "236px",
        padding: "0.2em",
        position: "relative"
      },
      tooltip: (b) => ({
        display: b ? "initial" : "none",
        position: "absolute",
        backgroundColor: "rgba(255, 255, 255, 0.3)"
      })
    }
    return (
      <div
        style={ styles.overlay }
        onMouseOver={ () => this.setState({ showDescription: true }) }
        onMouseOut={ () => this.setState({ showDescription: false }) }
      >
        <div style={ styles.tooltip(this.state.showDescription) } >{ this.props.picture.description }</div>
        <img src={this.props.picture.images["236x"].url} alt="image"/>
      </div>
    )
  }
}









/*
    {
        "access": [],
        "additional_hide_reasons": [],
        "attribution": {
            "author_name": null,
            "author_url": null,
            "provider_favicon_url": "https://sam.meder.pinterdev.com/static/images/api/attrib/flickr.png",
            "provider_icon_url": "https://sam.meder.pinterdev.com/static/images/api/attrib/flickr@2x.png",
            "provider_name": "flickr",
            "title": null,
            "url": null
        },
        "board": {
            "followed_by_me": false,
            "id": "404690785205110235",
            "image_thumbnail_url": "https://s-media-cache-ak0.pinimg.com/upload/404690785205110235_board_thumbnail_2016-04-10-14-53-11_17350_60.jpg",
            "is_collaborative": false,
            "layout": "default",
            "name": "Kittens",
            "owner": {
                "id": "404690853924206360"
            },
            "privacy": "public",
            "type": "board",
            "url": "/mirandavermaak/kittens/"
        },
        "buyable_product": null,
        "comment_count": 0,
        "comments": {
            "bookmark": null,
            "data": [],
            "uri": "/v3/pins/404690716496794205/comments/"
        },
        "created_at": "Sun, 06 Mar 2016 18:24:51 +0000",
        "description": "* * KITTEN: \" Me name be Three-Quarter cuz dat be abouts me tail. Me don't minds it cuz me be loved by me humans.",
        "description_html": "* * KITTEN: \" Me name be Three-Quarter cuz dat be abouts me tail. Me don't minds it cuz me be loved by me humans.",
        "domain": "flic.kr",
        "dominant_color": "#7c9a6f",
        "embed": null,
        "id": "404690716496794205",
        "image_signature": "c1e3b7b629b4d446b392ed623d0c0017",
        "images": {
            "136x136": {
                "height": 136,
                "url": "https://s-media-cache-ak0.pinimg.com/136x136/c1/e3/b7/c1e3b7b629b4d446b392ed623d0c0017.jpg",
                "width": 136
            },
            "236x": {
                "height": 308,
                "url": "https://s-media-cache-ak0.pinimg.com/236x/c1/e3/b7/c1e3b7b629b4d446b392ed623d0c0017.jpg",
                "width": 236
            },
            "474x": {
                "height": 619,
                "url": "https://s-media-cache-ak0.pinimg.com/474x/c1/e3/b7/c1e3b7b629b4d446b392ed623d0c0017.jpg",
                "width": 474
            },
            "736x": {
                "height": 962,
                "url": "https://s-media-cache-ak0.pinimg.com/736x/c1/e3/b7/c1e3b7b629b4d446b392ed623d0c0017.jpg",
                "width": 736
            },
            "orig": {
                "height": 1024,
                "url": "https://s-media-cache-ak0.pinimg.com/originals/c1/e3/b7/c1e3b7b629b4d446b392ed623d0c0017.jpg",
                "width": 783
            }
        },
        "is_downstream_promotion": false,
        "is_playable": false,
        "is_repin": true,
        "is_uploaded": false,
        "is_video": false,
        "like_count": 9,
        "liked_by_me": false,
        "link": "https://flic.kr/p/r8J5Ze",
        "method": "api_sdk",
        "pin_join": {
            "canonical_pin": {
                "id": "404690716496794205"
            },
            "seo_description": "* * KITTEN: \" Me name be Three-Quarter cuz dat be abouts me tail. Me don't minds it cuz me be loved by me humans.",
            "visual_annotation": [
                "Blacky S",
                "Black Cats",
                "Favorite Cats",
                "Black Kittens",
                "Kittens Cats",
                "Cats Kittens",
                "Black Fur"
            ],
            "visual_descriptions": [
                "Nightpaw--she-cat--born with short tail--apprentice of Leaftail--no kits or mate--sweet--green eyes--black fur",
                "black kitten I'm Crazy about this website http://wuvely.com",
                "black kitten, black cat advocate",
                "I want this black kitten!",
                "black kitten"
            ]
        },
        "pinner": {
            "explicitly_followed_by_me": false,
            "full_name": "Miranda Kruger",
            "id": "404690853924206360",
            "image_large_url": "https://s-media-cache-ak0.pinimg.com/avatars/mirandavermaak-1412391628_280.jpg",
            "image_small_url": "https://s-media-cache-ak0.pinimg.com/avatars/mirandavermaak-1412391628_60.jpg",
            "type": "user",
            "username": "mirandavermaak"
        },
        "place_summary": null,
        "price_currency": "USD",
        "price_value": 0.0,
        "privacy": "public",
        "promoter": null,
        "repin_count": 29,
        "rich_summary": null,
        "source_interest": null,
        "title": "Kitty Dora",
        "type": "pin",
        "view_tags": []
    }
    */