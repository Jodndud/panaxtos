export default function RootInfo({children}: Readonly<{
  children: React.ReactNode;
}>){
    return(
        <div>
            {/* 사이드바 */}
            {children}
        </div>
    )
}