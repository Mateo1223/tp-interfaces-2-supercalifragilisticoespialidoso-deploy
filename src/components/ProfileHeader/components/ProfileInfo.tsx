interface ProfileInfoProps {
  name: string
  nickName?: string
  bio?: string
}

const ProfileInfo = ({ name, nickName, bio }: ProfileInfoProps) => {
  return (
    <div className="text-center md:text-left space-y-2">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-2xl font-semibold">{name}</h1>
        {nickName && <p className="text-sm text-gray-500">@{nickName}</p>}
      </div>
      {bio && bio?.length > 0 && <p>{bio}</p>}
    </div>
  )
}

export default ProfileInfo
