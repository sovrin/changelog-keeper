import classNames from '@thomann/classnames';

/**
 *
 * @param style
 * @param className
 */
const useStyle = (style: object, className: string = null) => {
    /**
     *
     */
    return (base: string, conditions: object = {}): string => {
        const styles = Object.keys(conditions)
            .map((key) => classNames({[key]: conditions[key]}))
            .map((needle) => style[needle])
        ;

        return classNames(
            style[base],
            className,
            styles
        );
    };
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 02.03.2022
 * Time: 20:05
 */
export default useStyle;
