import PropTypes from 'prop-types';
import { ProfilePage, Avatar, Description, Name, Tag, Location, Stats, Item, Label, Quantity } from './Profile.styled';


export const Profile = ({ userName, tag, location, avatar, stats: { followers, views, likes } }) => {
  return (
    <ProfilePage>
      <Description>
        <Avatar
          src={avatar}
          alt="User avatar"
          className="avatar"
        />  
        <Name>{userName}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Item>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Item>
      </Stats>
    </ProfilePage>
  )
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};