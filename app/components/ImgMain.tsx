
import { useAppSelector } from '../store/hooks'


export default function ImgMain() {
    const {eventUrl} = useAppSelector((state) => state.main)
    return (
        <div className="fake-img">
          {
            eventUrl === '' ? (
              <div className="text-img">Here will be img</div>
            ) : (
              <img src={eventUrl} alt="img" />
            )
          }
        </div>
    )
}
