export const codeSnippet = `
        "use client"
        
        import Navbar from "../navbar";
        import Footer from "../footer";
        import Subscribe from "../subscribe";
        import {useRef} from "react";
        
        const useRefinTheDifferentComponent = () => {
            const subscribeRef = useRef<HTMLDivElement>(null);
            const inputSubscribe = useRef<HTMLDivElement>(null);

            const scrollToSubscrieb = () => {
                if(subscribeRef.current && inputSubscribe.current) {
                    subscribeRef.current.scrollIntoView({behavior: "smooth"});
                    setTimeout(() => {
                        if(inputSubscribe.current) {
                            inputSubscribe.current.focus();
                        }
                    }, 1300)
                }
            }
            return (
                <div className="max-w-[45em] mx-auto min-h-screen">
                    <Navbar onClick={ScrollToSubscribe} arrow="/blog" />
                    <div className="mt-14">{children}</div>
                    <Subscribe ref={subscribeRef} inputRef={inputSubscribe} />
                    <Footer from="templateBlog" />
                </div>
            );
        }
    `;

export const codeSnippet2 = `
        import React, {forwardRef, RefObject} from "react";
        
        interface SubscribeProps {
            inputRef: RefObject<HTMLInputElement>
        }

        const Subscribe = forwardRef<HTMLDivElement, SubscribeProps>({props, ref}) => {
            const {inputRef}: any = props;
            
            return (
                <div ref={ref}>
                    <input ref={inputRef} type="text" />
                </div>
            )
        }
        export default Subscribe;
        
    `;
