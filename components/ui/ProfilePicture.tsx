import Image from 'next/image'

const ProfilePicture = () => {
  return (
    <div className="w-32 h-32 overflow-hidden rounded-full border-4 border-white shadow-lg mb-[20px]">
      <Image
        src="/emmanuel.jpeg"
        alt="Profile Picture"
        width={128}
        height={128}
        className="object-cover w-full h-full"
      />
    </div>
  )
}

export default ProfilePicture