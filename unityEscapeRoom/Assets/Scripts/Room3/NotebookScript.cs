using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NotebookScript : MonoBehaviour
{
    public Transform target;
    public float speed;
    private bool moving = false;
    private bool moving2 = false;
    public bool inFront = false;
    public float rotX;
    public float rotY;
    public float rotZ;
    private Vector3 originalPos;

    private Quaternion originalRot;

    private Vector3 newRot;
    public Vector3 laptopVector;
    // Start is called before the first frame update
    void Start()
    {
        Debug.Log("Started!");
        originalPos = transform.position;
        originalRot = transform.rotation;
        //    originalRot = new Vector3(transform.rotation.x, transform.rotation.y, transform.rotation.z);
        GameObject.Find("Notebook_Back_Button").GetComponent<Renderer>().enabled = false;
    }

    private void OnMouseDown()
    {
        if (!inFront)
        {
            Debug.Log("Clicked1!");
            if (moving == false)
            {
                moving = true;
                inFront = true;
            }
        }


    }
    // Update is called once per frame
    void Update()
    {
        MoveToFront();
        if (GameObject.Find("Notebook_Back_Button").GetComponent<BackArrowScript>().backButtonClicked)
        {
            Debug.Log("Back button clicked again");
            if (inFront)
            {
                Debug.Log("Move back");
                if (moving2 == false)
                {
                    moving2 = true;
                    inFront = false;
                }
            }
            MoveToOriginalPosition();

        }
        /*
        if(moving == true){
            transform.position = Vector3.MoveTowards(transform.position, target.position + target.forward, speed);
            transform.right = target.position - target.position;
            newRot = new Vector3(target.rotation.x + rotX, target.rotation.y + rotY, target.rotation.z + rotZ);
        //    transform.rotation = originalRot;
            transform.eulerAngles = newRot;
            if(transform.position == target.position + target.forward){
                moving = false;
                inFront = true;
            }
            
        }    
        if(moving2 == true){
            transform.position = Vector3.MoveTowards(transform.position, originalPos, speed);
            transform.rotation = originalRot;
            if(transform.position == originalPos){
                moving2 = false;
                inFront = false;
            }
            
        } */
    }

    void MoveToFront()
    {
        if (moving == true)
        {
            transform.position = Vector3.MoveTowards(transform.position, target.position + target.forward + laptopVector, speed);
            transform.right = target.position - target.position;
            newRot = new Vector3(target.rotation.x + rotX, target.rotation.y + rotY, target.rotation.z + rotZ);
            transform.eulerAngles = newRot;
            if (transform.position == target.position + target.forward + laptopVector)
            {
                moving = false;
                inFront = true;

                GameObject.Find("Notebook_Back_Button").GetComponent<Renderer>().enabled = true;
            }

        }
    }

    void MoveToOriginalPosition()
    {
        if (moving2 == true)
        {
            Debug.Log("REACHED");
            transform.position = Vector3.MoveTowards(transform.position, originalPos, speed);
            //    transform.eulerAngles = originalRot;
            transform.rotation = originalRot;
            if (transform.position == originalPos)
            {

                moving2 = false;
                inFront = false;
                GameObject.Find("Notebook_Back_Button").GetComponent<BackArrowScript>().backButtonClicked = false;
                GameObject.Find("Notebook_Back_Button").GetComponent<Renderer>().enabled = false;
                //transform.eulerAngles = originalRot;    
            }


        }
    }
}
