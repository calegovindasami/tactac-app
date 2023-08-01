export default interface IPost {
    userId: number,
    username: string,
    tag: string,
    description: string,
    image_url: string | null,
    avatar_url: string,
}