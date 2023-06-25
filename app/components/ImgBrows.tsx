import { useAppSelector } from '../store/hooks'


export default function ImgBrows() {
    const {image} = useAppSelector((state) => state.brows)
    return (
        <div className="fake-img">
          {
            image === '' ? (
              <div className="text-img">Here will be img</div>
            ) : (
              <img src={image} alt="img" />
            )
          }
        </div>
    )
}
