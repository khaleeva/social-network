import React from "react";
import { create, act } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
        });

        const instance = component.root.props;
        expect(instance.status).toBe("SUBSCRIBE TO BASIC");
    });

    test("after creation <span> should be displayed", () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
        });

        let root = component.root;
        let testInstance = root.findByType('div');
        expect(testInstance).not.toBeNull();
    });


    test("after creation <input> shouldn't be displayed", () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
        });
        const root = component.root;
        expect(() => {
            let form = root.findByType("form");
        }).toThrow();
    });

    test("after creation <div> should contains correct status", () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
        });
        const root = component.root;
        const testInstance = root.findByType('div');
        expect(testInstance.children[1]).toBe("SUBSCRIBE TO BASIC");
    });

    test("input should be displayed in editMode instead of div", () => {

            let component;
            act(() => {
                component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
            });

            const root = component.root;
            const testInstance = root.findByType('div');
            act (() => {
                testInstance.props.onDoubleClick();
            })
            let input = root.findByType("input");
            expect(input.props.value).toBe("SUBSCRIBE TO BASIC");
    });

//     test("callback should be called", () => {
//         const mockCallback = jest.fn();
//         let component;
//         act(() => {
//             component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" updateStatus={mockCallback}/>);
//         });
//         const instance = component.root;
//         instance.deactivateEditMode();
//         expect(mockCallback.mock.calls.length).toBe(1);
//     });
//
});