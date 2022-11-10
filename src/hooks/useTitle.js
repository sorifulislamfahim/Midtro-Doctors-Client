import { useEffect } from "react"

const useTitle = title => {
    useEffect( () => {
        document.title = `MidTro - ${title}`;
    }, [title])
}

export default useTitle;