/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArtist = /* GraphQL */ `
  mutation CreateArtist(
    $input: CreateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    createArtist(input: $input, condition: $condition) {
      id
      name
      albums {
        items {
          id
          title
          createdAt
          updatedAt
          artistAlbumsId
          owner
        }
        nextToken
      }
      songs {
        items {
          id
          title
          lyrics
          createdAt
          updatedAt
          artistSongsId
          albumSongsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist(
    $input: UpdateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    updateArtist(input: $input, condition: $condition) {
      id
      name
      albums {
        items {
          id
          title
          createdAt
          updatedAt
          artistAlbumsId
          owner
        }
        nextToken
      }
      songs {
        items {
          id
          title
          lyrics
          createdAt
          updatedAt
          artistSongsId
          albumSongsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist(
    $input: DeleteArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    deleteArtist(input: $input, condition: $condition) {
      id
      name
      albums {
        items {
          id
          title
          createdAt
          updatedAt
          artistAlbumsId
          owner
        }
        nextToken
      }
      songs {
        items {
          id
          title
          lyrics
          createdAt
          updatedAt
          artistSongsId
          albumSongsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
      id
      title
      artist {
        id
        name
        albums {
          nextToken
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      songs {
        items {
          id
          title
          lyrics
          createdAt
          updatedAt
          artistSongsId
          albumSongsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      artistAlbumsId
      owner
    }
  }
`;
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
      id
      title
      artist {
        id
        name
        albums {
          nextToken
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      songs {
        items {
          id
          title
          lyrics
          createdAt
          updatedAt
          artistSongsId
          albumSongsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      artistAlbumsId
      owner
    }
  }
`;
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
      id
      title
      artist {
        id
        name
        albums {
          nextToken
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      songs {
        items {
          id
          title
          lyrics
          createdAt
          updatedAt
          artistSongsId
          albumSongsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      artistAlbumsId
      owner
    }
  }
`;
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
      id
      title
      lyrics
      album {
        id
        title
        artist {
          id
          name
          createdAt
          updatedAt
          owner
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        artistAlbumsId
        owner
      }
      artist {
        id
        name
        albums {
          nextToken
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      artistSongsId
      albumSongsId
      owner
    }
  }
`;
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
      id
      title
      lyrics
      album {
        id
        title
        artist {
          id
          name
          createdAt
          updatedAt
          owner
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        artistAlbumsId
        owner
      }
      artist {
        id
        name
        albums {
          nextToken
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      artistSongsId
      albumSongsId
      owner
    }
  }
`;
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
      id
      title
      lyrics
      album {
        id
        title
        artist {
          id
          name
          createdAt
          updatedAt
          owner
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        artistAlbumsId
        owner
      }
      artist {
        id
        name
        albums {
          nextToken
        }
        songs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      artistSongsId
      albumSongsId
      owner
    }
  }
`;
